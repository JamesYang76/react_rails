module Api
  module V1
    class ApiController < ActionController::API
      include Pundit
      #after_action :verify_authorized, except: :index
      #after_action :verify_policy_scoped, only: :index
      after_action :verify_authorized
      rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

      private
      def user_not_authorized
        head :forbidden
      end
    end
  end
end