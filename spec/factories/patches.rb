# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :patch do
    name "MyString"
    sequence(:code) { |n| "CODE#{n}" }
    dots_count 5000
    colors_count 5
    width 10
    height 15
    cost 0
    in_stock 15
  end
end
