Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "plants#index"
  get "/plants/api", to:"plants#api", as: :plants_api
end
