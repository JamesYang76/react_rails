class ContactPolicy < ApplicationPolicy


  def index?
    true
  end

  def create?
    true
  end

  def update?
    true
  end

  def edit?
    true
  end

  def new?
    true
  end

  def destroy?
    false
  end

  class Scope < Scope
    def resolve
      scope
      #scope.none
    end
  end
end