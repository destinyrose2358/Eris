class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :username, :session_token, :email, uniqueness: true, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :accepted_memberships,
  -> { where accepted: :true },
  class_name: :Membership

  has_many :pending_memberships,
  -> { where accepted: :false },
  class_name: :Membership

  has_one_attached :photo

  has_many :servers,
  through: :accepted_memberships,
  source: :memberable,
  source_type: :Server

  has_many :pending_servers,
  through: :pending_memberships,
  source: :memberable,
  source_type: :Server

  has_many :channels,
  through: :servers,
  source: :channels

  has_many :owned_servers,
  class_name: :Server,
  foreign_key: :owner_id

  has_many :user_roles,
  dependent: :destroy

  has_many :roles,
  through: :user_roles,
  source: :role

  has_many :messages,
  foreign_key: :author_id

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
    nil
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
