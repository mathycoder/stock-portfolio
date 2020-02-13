class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:create, :get_current_user]

  def create
  end

  def get_current_user
    if current_user
      render json: {
        user: {
          name: current_user.name,
          email: current_user.email,
          id: current_user.id
        }}, status: 201
    else
      render json: {
        error: "No one logged in"
      }
    end
  end

  def destroy
    session.clear
    render json: {
      notice: "successfully logged out"
    }
  end

  private
    def session_params
      params.require(:session).permit(:email, :password)
    end
end
