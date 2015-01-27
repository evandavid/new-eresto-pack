class Api::V1::SessionsController < ApplicationController
  def create
    user = User.where(username_params).first
    if user 
      if user.valid_password?(password_params[:password])
        show_json 'OK', 200, 'users/index', user
      else
        show_json 'Password didn\'t correct', 400, 'application/error'
      end
    else
      show_json 'User not registered', 404, 'application/error'
    end
  end

  private
    def username_params
      params.require(:user).permit(:username)
    end

    def password_params
      params.require(:user).permit(:password)
    end
end
