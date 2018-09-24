class CreatePhoneNumbers < ActiveRecord::Migration[5.2]
  def change
    create_table :phone_numbers do |t|
      t.references :contact, foreign_key: true
      t.string :name
      t.string :phone_number

      t.timestamps
    end
  end
end
