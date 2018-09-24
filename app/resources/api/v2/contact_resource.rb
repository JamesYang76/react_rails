module Api
  module V2
    class ContactResource < BaseResource
      attributes :name_first, :name_last, :email, :twitter
      has_many :phone_numbers
    end
  end
end