class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.belongs_to :article, index: true
      t.belongs_to :user, index: true
      t.string :article_description

      t.timestamps
    end
  end
end
