module Api
  module V2
    class FruitResource < BaseResource
      immutable
      attributes :name, :description, :full_name

      def full_name
        "full name: #{@model.name}"
      end

      #filter :name, default: 'Apple'

    end
  end
end