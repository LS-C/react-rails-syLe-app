class LikesController < ApplicationController
  skip_before_action :authenticate_request

  def like
    @user = User.find(params[:user_id])
    @article = Article.find(params[:article_id])
    check = Like.find_by(user_id: params[:user_id], article_description: params[:article_description] )
    if !check
      @user.likes!(@article)
        render json: @article
    else
      check.destroy
        render json: { msg: "article removed" }
    end
  end

  def un_like
    @user = User.find(params[:user_id])
    @article = Article.find(params[:article_id])
    check = Like.find_by(user_id: params[:user_id], article_description: params[:article_description] )
    check.destroy
      render json: { msg: "article removed" }
  end
  
end
