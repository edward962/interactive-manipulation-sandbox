class Place < ActiveRecord::Base
  attr_accessible :locx, :locy, :name, :tags
  attr_accessible :image
  attr_accessible :angle
  has_attached_file :image, :styles => {:medium=>"300x300>", :thumb => "100x100>"}
end
