class FruitsController < ApplicationController
  def index
    skip_authorization
    skip_policy_scope
  end
end