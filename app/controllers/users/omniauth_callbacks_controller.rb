class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    @user = User.from_omniauth(omniauth_params)
    puts "\n[JAMES] omniauth_params = #{omniauth_params.inspect}"
    if @user.persisted?
      #sign_in_and_redirect @user, :event => :authentication
      sign_in @user, event: :authentication
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
      redirect_to koala_facebook_profile_path
    else
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