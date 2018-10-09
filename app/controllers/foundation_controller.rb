class FoundationController < ApplicationController
  def test
    skip_authorization
    skip_policy_scope
  end
end