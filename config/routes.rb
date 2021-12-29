Rails.application.routes.draw do
  devise_for :users
  root 'application#frontend'
  get '*path', to: 'application#frontend'
end
