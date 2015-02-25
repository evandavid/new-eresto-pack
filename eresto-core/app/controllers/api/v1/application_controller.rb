class Api::V1::ApplicationController < ApplicationController
  include Pundit
  before_action :auth_from_token!

  protected
    # Auth form token that send by client
    def auth_from_token!
      user_token =request.headers['x-session-token'].presence
      user = user_token && User.find_by_authentication_token(user_token.to_s)
       
      if user
        # We are passing store false, so the user is not actually stored in the session 
        sign_in user, store: false
      else
        warden.custom_failure!
        message = 'You are not authorized to access this data'
        show_json message, 401, 'application/error'
      end 
    end
end
