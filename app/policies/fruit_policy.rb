class FruitPolicy < ApplicationPolicy

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
    true
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end