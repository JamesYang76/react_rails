class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.from_omniauth(omniauth_params)
    if @user.persisted?
      puts "\n[JAMES]true @user.persisted?"
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      puts "\n[JAMES]false @user.persisted?"
      session["devise.facebook_data"] = omniauth_params
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to :root
  end

  private
  def omniauth_params
    request.env["omniauth.auth"]
  end
end