class ErrorsController < ApplicationController
  def catch_404
    @message = "Oops, its looking like you may have taken a wrong turn."
    @code = 404
    render 'application/error'
  end
end
