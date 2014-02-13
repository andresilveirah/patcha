class User < ActiveRecord::Base
  devise :database_authenticatable, :lockable,
         :recoverable, :rememberable, :trackable, :validatable
end
