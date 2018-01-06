class ArticlesController < ApplicationController
  skip_before_action :authenticate_request
  attr_reader :current_user

  def index
    @articles = Article.all
      render json: @articles
  end


  def create
    @article = Article.find_by(description: params[:description])
    if !@article
    @article = Article.new(article_params)
    @user = User.find(params[:id])
    @article.save!
      render json: @article
    else
      render json: @article
    end
  end





  def saves
    @user = User.find(params[:user_id])
    @article = Article.find(params[:id])
    @article_saved = Save.find_by(user_id: @user.id, article_description: @article.description)
    if !@article_saved
      @saving = Save.new(user_id: @user.id, article_id: @article.id, article_description: @article.description)
      @saving.save!
        render json: { article: @article, save: @saving }
    else
      @article_saved.destroy
      @article.destroy
      render json: { msg: 'article deleted' }
    end
  end

  def top_articles
    article = Article.all
    render json: article
  end


  private
  def article_params
    params.require(:article).permit(:title, :description, :url, :published_at)
  end

  def saves_params
    params.require(:saves).permit(:article_id, :user_id, :article_description)
  end
  
end
