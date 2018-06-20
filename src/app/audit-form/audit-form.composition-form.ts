export const AuditComposition: CompositionFormRow[] = [
  {
    row: [
      {
        id: 'agency',
        type: 'input',
        label: 'Agence :',
        class: 'col-6',
        name: 'agency',
        placeholder: 'Méricourt',
        formControlName: 'formInputAgency'
      },
      {
        id: 'sub-agency',
        type: 'input',
        label: 'Sous secteur :',
        class: 'col-6',
        name: 'sub-agency',
        placeholder: '430',
        formControlName: 'formInputSubAgency'
      }
    ]
  },
  {
    row: [
      {
        id: 'site',
        type: 'input',
        label: 'Site :',
        class: 'col-6',
        name: 'site',
        placeholder: 'Arena Stade Couvert',
        formControlName: 'formInputSite'
      },
      {
        id: 'driver',
        type: 'input',
        label: 'Nom du conducteur :',
        class: 'col-6',
        name: 'agency',
        placeholder: 'Michel',
        formControlName: 'formInputDriver'
      }
    ]
  },
  {
    row: [
      {
        id: 'controler',
        type: 'input',
        label: 'Contrôle réalisé par :',
        class: 'col-6',
        name: 'controler',
        placeholder: 'Jacques',
        formControlName: 'formInputControler'
      },
      {
        id: 'auditDate',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'auditDate',
        placeholder: 'Date de l\'audit',
        formControlName: 'formInputAuditDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'distance',
        type: 'number',
        label: 'Kilométrage :',
        class: 'col-6',
        name: 'distance',
        placeholder: '1000',
        formControlName: 'formInputDistance'
      },
      {
        id: 'plateNumber',
        type: 'input',
        label: 'Immatriculation :',
        class: 'col-6',
        name: 'plateNumber',
        placeholder: 'Immatriculation',
        formControlName: 'formInputPlateNumber'
      }
    ]
  },
  {
    row: [
      {
        id: 'cleanliness',
        type: 'radio',
        label: 'Propreté extérieure :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'cleanliness',
        placeholder: '',
        formControlName: 'formRadioCleanliness'
      },
      {
        id: 'cleanlinessComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'cleanlinessComment',
        placeholder: '',
        formControlName: 'formInputCleanliness'
      }
    ]
  },
  {
    row: [
      {
        id: 'bodyState',
        type: 'radio',
        label: 'Etat carosserie :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'bodyState',
        placeholder: '',
        formControlName: 'formRadioBodyState'
      },
      {
        id: 'bodyStateComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'bodyStateComment',
        placeholder: '',
        formControlName: 'formInputBodyState'
      }
    ]
  },
  {
    row: [
      {
        id: 'arrangement',
        type: 'radio',
        label: 'Propreté intérieure/rangement :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'arrangement',
        placeholder: '',
        formControlName: 'formRadioArrangement'
      },
      {
        id: 'arrangementComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'arrangementComment',
        placeholder: '',
        formControlName: 'formInputArrangement'
      }
    ]
  },
  {
    row: [
      {
        id: 'pneumaticState',
        type: 'radio',
        label: 'Etat des pneumatiques :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'pneumaticState',
        placeholder: '',
        formControlName: 'formRadioPneumaticState'
      },
      {
        id: 'pneumaticStateComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'pneumaticStateComment',
        placeholder: '',
        formControlName: 'formInputPneumaticState'
      }
    ]
  },
  {
    row: [
      {
        id: 'lighting',
        type: 'radio',
        label: 'Eclairage :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'lighting',
        placeholder: '',
        formControlName: 'formRadioLighting'
      },
      {
        id: 'lightingComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'lightingComment',
        placeholder: '',
        formControlName: 'formInputLighting'
      }
    ]
  },
  {
    row: [
      {
        id: 'wingMirror',
        type: 'radio',
        label: 'Retroviseurs :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'wingMirror',
        placeholder: '',
        formControlName: 'formRadioWingMirror'
      },
      {
        id: 'wingMirrorComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'wingMirrorComment',
        placeholder: '',
        formControlName: 'formInputWingMirror'
      }
    ]
  },
  {
    row: [
      {
        id: 'windscreenWipers',
        type: 'radio',
        label: 'Essuie-glaces :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'windscreenWipers',
        placeholder: '',
        formControlName: 'formRadioWindscreenWipers'
      },
      {
        id: 'windscreenWipersComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'windscreenWipersComment',
        placeholder: '',
        formControlName: 'formInputWindscreenWipers'
      }
    ]
  },
  {
    row: [
      {
        id: 'windshield',
        type: 'radio',
        label: 'Pare-brise :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'windshield',
        placeholder: '',
        formControlName: 'formRadioWindshield'
      },
      {
        id: 'windshieldComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'windshieldComment',
        placeholder: '',
        formControlName: 'formInputWindshield'
      }
    ]
  },
  {
    row: [
      {
        id: 'insurance',
        type: 'radio',
        label: 'Vignette d\'assurance valide et en cours :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'insurance',
        placeholder: '',
        formControlName: 'formRadioInsurance'
      },
      {
        id: 'insuranceComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'insuranceComment',
        placeholder: '',
        formControlName: 'formInputInsurance'
      }
    ]
  },
  {
    row: [
      {
        id: 'report',
        type: 'radio',
        label: 'Constat pré-rempli (tampon IDEX) :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'report',
        placeholder: '',
        formControlName: 'formRadioReport'
      },
      {
        id: 'reportComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'reportComment',
        placeholder: '',
        formControlName: 'formInputReport'
      }
    ]
  },
  {
    row: [
      {
        id: 'logo',
        type: 'radio',
        label: 'Logos :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'logo',
        placeholder: '',
        formControlName: 'formRadioLogo'
      },
      {
        id: 'logoComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'logoComment',
        placeholder: '',
        formControlName: 'formInputLogo'
      }
    ]
  },
  {
    row: [
      {
        id: 'vehiclePapers',
        type: 'radio',
        label: 'Papiers du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'vehiclePapers',
        placeholder: '',
        formControlName: 'formRadioVehiclePapers'
      },
      {
        id: 'vehiclePapersComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'vehiclePapersComment',
        placeholder: '',
        formControlName: 'formInputVehiclePapers'
      }
    ]
  },
  {
    row: [
      {
        id: 'vehicleBook',
        type: 'radio',
        label: 'Carnet d\'entretien :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'vehicleBook',
        placeholder: '',
        formControlName: 'formRadioVehicleBook'
      },
      {
        id: 'vehicleBookComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'vehicleBookComment',
        placeholder: '',
        formControlName: 'formInputVehicleBook'
      }
    ]
  },
  {
    row: [
      {
        id: 'technicalRevision',
        type: 'radio',
        label: 'Révision technique :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'technicalRevision',
        placeholder: '',
        formControlName: 'formRadioTechnicalRevision'
      },
      {
        id: 'technicalRevisionComment',
        type: 'number',
        label: 'Kilométrage de la dernière révision :',
        class: 'col-4',
        name: 'technicalRevisionComment',
        placeholder: '1000',
        formControlName: 'formInputTechnicalRevision'
      }
    ]
  },
  {
    row: [
      {
        id: 'lastCtTheo',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'lastCtTheo',
        placeholder: 'Date du dernier C.T. théorique',
        formControlName: 'formDateLastCtTheo'
      },
      {
        id: 'lastCtRea',
        type: 'date',
        label: '',
        class: 'col-6',
        name: 'lastCtRea',
        placeholder: 'Date du dernier C.T. réalisé',
        formControlName: 'formDateLastCtRea'
      }
    ]
  },
  {
    row: [
      {
        id: 'sticker',
        type: 'radio',
        label: 'Présence du sticker :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'sticker',
        placeholder: '',
        formControlName: 'formRadioSticker'
      },
      {
        id: 'stickerComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'stickerComment',
        placeholder: '',
        formControlName: 'formInputSticker'
      }
    ]
  },
  {
    row: [
      {
        id: 'license',
        type: 'radio',
        label: 'Permis de conduire :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'license',
        placeholder: '',
        formControlName: 'formRadioLicense'
      },
      {
        id: 'licenseComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'licenseComment',
        placeholder: '',
        formControlName: 'formInputLicense'
      }
    ]
  },
  {
    row: [
      {
        id: 'loadingVehicle',
        type: 'radio',
        label: 'Chargement du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Non satisfaisant',
            value: false
          }
        ],
        name: 'loadingVehicle',
        placeholder: '',
        formControlName: 'formRadioLoadingVehicle'
      },
      {
        id: 'loadingComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'loadingComment',
        placeholder: '',
        formControlName: 'formInputLoading'
      }
    ]
  },
  {
    row: [
      {
        id: 'tools',
        type: 'radio',
        label: 'Outillage du véhicule :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'tools',
        placeholder: '',
        formControlName: 'formRadioTools'
      },
      {
        id: 'toolsDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'toolsDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateToolsDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'spareWheel',
        type: 'radio',
        label: 'Présence roue de secours :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'spareWheel',
        placeholder: '',
        formControlName: 'formRadioSpareWheel'
      },
      {
        id: 'spareWheelDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'spareWheelDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateSpareWheelDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'cric',
        type: 'radio',
        label: 'Présence du cric :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'cric',
        placeholder: '',
        formControlName: 'formRadioCric'
      },
      {
        id: 'cricDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'cricDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateCricDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'crank',
        type: 'radio',
        label: 'Présence manivelle :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'crank',
        placeholder: '',
        formControlName: 'formRadioCrank'
      },
      {
        id: 'crankDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'crankDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateCrankDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'securityAccessory',
        type: 'radio',
        label: 'Gilet et triangle de sécurité :',
        class: 'col-8',
        button: [
          {
            label: 'Conforme',
            value: true
          },
          {
            label: 'Non conforme',
            value: false
          }
        ],
        name: 'securityAccessory',
        placeholder: '',
        formControlName: 'formRadioSecurityAccessory'
      },
      {
        id: 'securityAccessoryDate',
        type: 'date',
        label: '',
        class: 'col-4',
        name: 'securityAccessoryDate',
        placeholder: 'Si NC, date de la levée de réserve',
        formControlName: 'formDateSecurityAccessoryDate'
      }
    ]
  },
  {
    row: [
      {
        id: 'extinguisher',
        type: 'radio',
        label: 'Extincteur vérifié annuellement :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Véhicule non équipé',
            value: false
          }
        ],
        name: 'extinguisher',
        placeholder: '',
        formControlName: 'formRadioExtinguisher'
      },
      {
        id: 'extinguisherComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'extinguisherComment',
        placeholder: '',
        formControlName: 'formInputExtinguisher'
      }
    ]
  },
  {
    row: [
      {
        id: 'aidKit',
        type: 'radio',
        label: 'Trousse à pharmacie :',
        class: 'col-8',
        button: [
          {
            label: 'Satisfaisant',
            value: true
          },
          {
            label: 'Véhicule non équipé',
            value: false
          }
        ],
        name: 'aidKit',
        placeholder: '',
        formControlName: 'formRadioAidKit'
      },
      {
        id: 'aidKitComment',
        type: 'textarea',
        label: 'Commentaires :',
        class: 'col-4',
        name: 'aidKitComment',
        placeholder: '',
        formControlName: 'formInputAidKit'
      }
    ]
  },
  {
    row: [
      {
        id: 'shocksOrStripes',
        type: 'textarea',
        label: 'Chocs ou Rayures :',
        class: 'col-12',
        name: 'shocksOrStripes',
        placeholder: '',
        formControlName: 'formInputshocksOrStripes'
      }
    ]
  },
  {
    row: [
      {
        id: 'observations',
        type: 'textarea',
        label: 'Observations :',
        class: 'col-12',
        name: 'observations',
        placeholder: '',
        formControlName: 'formInputObservations'
      }
    ]
  }
];

export class CompositionFormRow {
  row: CompositionForm[];
}

export class CompositionForm {
  id: string;
  type: string;
  class: string;
  label: string;
  name: string;
  placeholder: string;
  formControlName: string;
  button?: RadioButton[];
}

export class RadioButton {
  label: string;
  value: any;
}
