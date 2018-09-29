class HomeController < ApplicationController
  def main
    skip_authorization
    skip_policy_scope
  end
end