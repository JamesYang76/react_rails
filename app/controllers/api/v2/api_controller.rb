module Api
  module V2
    class ApiController < JSONAPI::ResourceController
      protect_from_forgery with: :null_session
    end
  end
end