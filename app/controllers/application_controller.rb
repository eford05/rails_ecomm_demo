class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Redirect after admin login to admin root path
  def after_sign_in_path_for(resource)
    if admin_signed_in?
      stored_location_for(resource) || admin_path
    end
  end
end
