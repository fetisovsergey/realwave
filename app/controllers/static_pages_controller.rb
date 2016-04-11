class StaticPagesController < ApplicationController
  # Render mobile or desktop depending on User-Agent for these actions.
  before_filter :check_for_mobile
  def home
  end
  def projects
  end
  def contact
  end
end
