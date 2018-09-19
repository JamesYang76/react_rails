module Api
  module V2
    class FruitResource < BaseResource
      immutable
      attributes :name, :description
    end
  end
end