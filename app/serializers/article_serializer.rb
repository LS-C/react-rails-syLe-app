class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :published_at
  has_many :likes
end
