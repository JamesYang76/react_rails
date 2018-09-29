class FruitPolicy < ApplicationPolicy

  def create?
    true
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
    end
  end
end