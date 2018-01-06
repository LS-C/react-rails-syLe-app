class Article < ApplicationRecord
  has_many :users, through: :likes
  has_many :likes


  def update_saved(user)
      user_saved?(user) ? not_saved(user) : saves(user)
  end

  def saves_message(user)
    if !user_saved?(user)
      if self.saves.count == 1
        "<strong>#{self.saves.count} company </strong> is like".html_safe
      else
        "<strong>#{self.saves.count} companies </strong> are interestest".html_safe
      end
    else
      if self.saves.count-1 == 1
        "<strong>You</strong> and <strong>#{self.saves.count - 1} other company </strong> is like".html_safe
      else
        "<strong>You</strong> and <strong>#{self.saves.count - 1} other companies </strong> are like".html_safe
      end
    end
  end

  def heart_class(user)
    user_saved?(user) ? "star icon" : "empty star icon"
  end


  def user_saved?(user)
    self.saves.where(user: user).any?
  end

  def saves(user)
    self.saves.create(user_id: user.id)
  end

  def not_saved?(user)
    self.saves.find_by(user_id: user.id).destroy
  end

end
