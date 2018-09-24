module Api
  module V2
    class PhoneNumberResource < BaseResource
      attributes :name, :phone_number
      has_one :contact

      filter :contact
    end
  end
end