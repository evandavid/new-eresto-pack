class ApplicationController < ActionController::API
  include ActionController::MimeResponds
  include ActionController::StrongParameters

  rescue_from(ActionController::ParameterMissing) do |parameter_missing_exception|
    message = parameter_missing_exception.param.to_s.capitalize + " parameter is required"
    show_json message, 400, 'application/error'
  end

  rescue_from ActiveRecord::RecordNotFound do |not_found|
    message = "Record not found"
    show_json message, 404, 'application/error'
  end

  protected 
    def show_json(message, code, view, data = nil)
      @message  = message
      @code     = code
      @data     = data
      render view
    end
end
