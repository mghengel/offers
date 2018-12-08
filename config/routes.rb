Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'home/index'
  root 'home#index'

  get 'offers/index'
  resources :offers
  root 'offers#index'

  get 'retailers/index'
  resources :retailers
  root 'retailers#index'

  get 'retailer_offers/index'
  resources :retailer_offers
  root 'retailer_offers#index'

  get 'custom/heartbeat'
  root 'custom#heartbeat'
end
