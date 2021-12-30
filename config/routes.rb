Rails.application.routes.draw do
  use_doorkeeper
  devise_for :users
  root 'application#frontend'
  get '*path', to: 'application#frontend'
end
