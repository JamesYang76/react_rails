class KoalaController < ApplicationController
  def login
    skip_authorization
    skip_policy_scope
    oauth = Koala::Facebook::OAuth.new("272973576659988",
                                       "c88b397f27d5c8e7ae559d69144d5b7b",
                                       "http://localhost:3000/koala/login_callback"
                                       )
    #redirect_to oauth.url_for_oauth_code(:permissions=>"email user_friends user_link user_photos user_posts")
    redirect_to oauth.url_for_oauth_code
  end

  def login_callback
    skip_authorization
    skip_policy_scope

    oauth = Koala::Facebook::OAuth.new("272973576659988",
                                       "c88b397f27d5c8e7ae559d69144d5b7b",
                                       "http://localhost:3000/koala/login_callback"
    )
    session[:access_token] = oauth.get_access_token(params[:code])
    flash[:notice] = "access_token = #{session[:access_token]} from Koala"

    redirect_to koala_facebook_profile_path
  end

  def facebook_profile
    skip_authorization
    skip_policy_scope
    @graph = Koala::Facebook::API.new( session[:access_token] )
    @profile = @graph.get_object("me")
    @friends = @graph.get_connections("me", "friends")

    puts "\n[JAMES] friends = #{@friends.inspect}"
    puts "\n[JAMES] @profile = #{@profile.inspect}"
  end
end