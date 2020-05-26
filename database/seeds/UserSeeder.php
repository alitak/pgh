<?php

use App\Models\User;
use Backpack\Settings\app\Models\Setting;
use App\Models\Partner;
use Different\Dwfw\app\Models\TimeZone;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run()
    {
        // USERS
        $user = User::query()->firstOrCreate([
            'email' => 'kukel.attila@gmail.com',
        ], [
            'name' => 'Kukel Attila',
            'email_verified_at' => '2020-05-26 17:00:00',
            'password' => bcrypt('12345'),
            'remember_token' => null,
            'created_at' => '2020-05-26 17:00:00',
            'updated_at' => '2020-05-26 17:00:00',
        ]);

        // BASE ROLES
        $role_admin = Role::query()->firstOrCreate([
            'name' => 'admin',
            'guard_name' => 'web',
        ], []);
        $role_user = Role::query()->firstOrCreate([
            'name' => 'user',
            'guard_name' => 'web',
        ], []);

        // add admin role to base user
        $user->assignRole($role_admin->name);
    }
}
