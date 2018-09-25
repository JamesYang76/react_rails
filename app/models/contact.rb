class Contact < ApplicationRecord
  has_many :phone_numbers, :dependent => :destroy

  validates :name_first, presence: true
  validates :name_last, presence: true
end
