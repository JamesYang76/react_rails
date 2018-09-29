module Api
  module V2
    class ApiController < JSONAPI::ResourceController
      protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }
      include JSONAPI::ActsAsResourceController
      rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

      private

      def context
        {user: current_user}
      end

      def user_not_authorized
        head :forbidden
      end

    end
  end
end