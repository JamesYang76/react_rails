class KoalaController < ApplicationController


  def facebook_profile
    skip_authorization
    skip_policy_scope
    @graph = Koala::Facebook::API.new( current_user.access_token)
    @profile = @graph.get_object("me")
    @friends = @graph.get_connections("me", "friends")
    @feeds =  @graph.get_connections("me", "feed")
  end
end