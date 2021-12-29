Rails.application.routes.draw do
  root 'application#frontend'
  get '*path', to: 'application#frontend'
end
