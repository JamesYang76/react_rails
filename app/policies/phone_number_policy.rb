class PhoneNumberPolicy < ApplicationPolicy

  def index?
    true
  end

  def create?
    false
  end

  def update?
    false
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