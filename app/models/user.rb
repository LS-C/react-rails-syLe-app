class User < ApplicationRecord
  has_many :articles, through: :likes
  has_many :likes

  validates :email, presence: true
  validates :password, presence: true, :on => :create
  validates :password_confirmation, presence: true, :on => :create


  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email,
    presence: true,
    length: { maximum: 105 },
    uniqueness: { case_sensitive: false },
    format: { with: VALID_EMAIL_REGEX }

  has_secure_password

  def likes!(article)
    self.likes.create!(article_id: article.id, article_description: article.description)
  end

  # destroys a heart with matching article_id and user_id
  def unlike!(article)
    like = self.likes.find_by_article_id(article.id)
    like.destroy!
  end

  # returns true of false if a article is hearted by user
  def like?(article)
    self.likes.find_by_article_id(article.id)
  end
  
end
