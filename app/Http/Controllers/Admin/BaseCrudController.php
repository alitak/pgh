<?php

namespace App\Http\Controllers\Admin;

use App\Events\MissionUpdated;
use App\Http\Requests\MissionRequest;
use App\Http\Requests\OptionRequest;
use App\Models\Mission;
use App\Models\MissionOption;
use App\Models\Partner;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Different\Dwfw\app\Http\Controllers\Files;

abstract class BaseCrudController extends CrudController
{
    protected function setupColumnsFieldsFromMethod(): void
    {
        $this->crud->setColumns($this->getColumns());
        $this->crud->addFields($this->getFields());
    }

    abstract protected function getColumns();

    abstract protected function getFields();

}
