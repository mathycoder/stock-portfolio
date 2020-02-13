class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def create
    @user = User.new(user_params)
    @user.password = params[:password]
    if @user.save
      session[:user_id] = @user.id
      render json: {
        user: {
          name: @user.name,
          email: @user.email,
          id: @user.id
          }
        }, status: 201
    else
      render json: {
        error: @user.errors.full_messages.first
        }, status: 424
    end
  end

  private
    def user_params
      params.require(:user).permit(:password, :name, :email)
    end

end
