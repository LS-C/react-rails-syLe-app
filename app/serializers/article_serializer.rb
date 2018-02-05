class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :url_image, :published_at
  has_many :likes
end
