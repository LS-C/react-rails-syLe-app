class UsersController < ApplicationController
  # skip_before_action :authenticate
  skip_before_action :authenticate_request
  # , only: [:create, :show]
  # skip_before_action :verify_authenticity_token, only: [:create]



  prepend SimpleCommand

  def show
    user = User.find(params[:id])
      render json: user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: { message: "new user not created" }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: { message: 'profile has not been updated'}
    end
  end

  def likes
    @user = User.find(params[:id])
    @likes = Like.where(user_id: @user.id)
    article_ids = []
    @likes.each do |like|
      article_ids << like["article_id"]
    end
    @articles = Article.find(article_ids)
      render json: @articles
  end


  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end

end
