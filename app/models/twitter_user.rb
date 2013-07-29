class TwitterUser < ActiveRecord::Base
  has_many :tweets

  def tweets_stale?
    if self.tweets.any?
      (Time.now - self.tweets.last.created_at) > 900
    else
      true
    end
  end

  def fetch_tweets!
    self.tweets.destroy_all
    Twitter.user_timeline(self.username).each do |tweet|
      self.tweets << Tweet.create(content: tweet.text)
    end
  end
end
