const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide a firstname."],
        trim: true,
        // unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large"]
    },
    lastname: {
        type: String,
        required: [true, "Please provide a lastname."],
        trim: true,
        // unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [50, "Name is too large"]
    },
    contactNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isMobilePhone(value, 'bn-BD');
            },
            message: "Please provide a valid phone number",
        },
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email."],
        trim: true,
        unique: [true, "Please provide a unique email address."],
        lowercase: true,
        validate: [validator.isEmail, "Provide a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) =>
                validator.isStrongPassword(value, {
                    minLength: 8,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumbers: 1,
                    minSymbols: 1,
                }),
            message: "Password is not strong enough.",
        }
    },
    confirmPassword: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Password doesn't match !",
        }
    },
    role: {
        type: String,
        enum: ["admin", "assistance", ""],
        default: "admin"
    },
    status: {
        type: String,
        enum: ["active", "inactive", "blocked"],
        default: "active"
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
},
    {
        timestamps: true,
    });

// call a pre middleware for make password hash
userSchema.pre("save", function (next) {
    const password = this.password;
    const hashPassword = bcrypt.hashSync(password, salt);
    this.password = hashPassword;
    this.confirmPassword = undefined;
    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User;