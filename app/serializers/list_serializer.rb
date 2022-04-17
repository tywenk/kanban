class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :rank
  has_one :board
end
