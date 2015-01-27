class Api::V1::UsersController < Api::V1::ApplicationController
  #show_json require message, status_code, view path, and data
  def index
    users = User.includes(:profile).all
    show_json 'OK', 200, 'users/index', users
  end

  def show
    user = User.find(params[:id])
    show_json 'OK', 200, 'users/index', user
  end
end
